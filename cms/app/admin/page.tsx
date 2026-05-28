"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Wisata = {
  id: number;
  nama: string;
  deskripsi: string;
  lokasi: string;
  harga: number;
  gambar: string;
  createdAt?: string;
};

type Review = {
  id: number;
  nama: string;
  komentar: string;
  rating: number;
  createdAt?: string;
};

type LoginResponse = {
  token?: string;
  access_token?: string;
  message?: string;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.trim() || "http://localhost:3000";

export default function AdminPage() {
  const [wisata, setWisata] = useState<Wisata[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState<"dashboard" | "wisata" | "review">(
    "dashboard",
  );
  const [loadingWisata, setLoadingWisata] = useState(false);
  const [loadingReview, setLoadingReview] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeEditId, setActiveEditId] = useState<number | null>(null);
  const [wisataForm, setWisataForm] = useState({
    nama: "",
    deskripsi: "",
    lokasi: "",
    harga: "",
    gambar: "",
  });
  const [reviewForm, setReviewForm] = useState({
    nama: "",
    komentar: "",
    rating: "5",
  });
  const [auth, setAuth] = useState<LoginResponse | null>(null);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  const router = useRouter();
  const ratingStats = useMemo(() => {
    const buckets = [1, 2, 3, 4, 5].map((value) => ({
      rating: value,
      count: reviews.filter((review) => review.rating === value).length,
    }));
    const maxCount = Math.max(1, ...buckets.map((item) => item.count));
    return { buckets, maxCount };
  }, [reviews]);

  const hargaPreview = useMemo(() => {
    const numeric = Number(wisataForm.harga || 0);
    if (!numeric) return "Rp 0";
    return `Rp ${new Intl.NumberFormat("id-ID").format(numeric)}`;
  }, [wisataForm.harga]);

  const resolveToken = (payload?: LoginResponse | null) => {
    if (!payload) return null;
    return payload.token || payload.access_token || null;
  };

  const isAuthenticated = Boolean(resolveToken(auth));

  const apiFetch = async (path: string, options: RequestInit = {}) => {
    const stored = window.localStorage.getItem("pbs-auth");
    const parsed: LoginResponse | null = stored ? JSON.parse(stored) : null;
    const token = resolveToken(parsed);
    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");
    if (token) headers.set("Authorization", `Bearer ${token}`);

    const response = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers,
      cache: "no-store",
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || `Request gagal: ${response.status}`);
    }

    return response.json();
  };


  const loadWisata = async () => {
    setLoadingWisata(true);
    setError(null);
    try {
      const data = await apiFetch("/wisata");
      setWisata(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal memuat wisata.");
    } finally {
      setLoadingWisata(false);
    }
  };

  const loadReviews = async () => {
    setLoadingReview(true);
    setError(null);
    try {
      const data = await apiFetch("/review");
      setReviews(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal memuat review.");
    } finally {
      setLoadingReview(false);
    }
  };

  useEffect(() => {
    const stored = window.localStorage.getItem("pbs-auth");
    if (stored) {
      setAuth(JSON.parse(stored));
    }
    setHasCheckedAuth(true);
  }, []);

  useEffect(() => {
    if (!hasCheckedAuth) return;
    if (!isAuthenticated) {
      router.replace("/admin/login");
      return;
    }
    loadWisata();
    loadReviews();
  }, [hasCheckedAuth, isAuthenticated]);

  const resetWisataForm = () => {
    setWisataForm({
      nama: "",
      deskripsi: "",
      lokasi: "",
      harga: "",
      gambar: "",
    });
    setActiveEditId(null);
  };

  const submitWisata = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const payload = {
      nama: wisataForm.nama,
      deskripsi: wisataForm.deskripsi,
      lokasi: wisataForm.lokasi,
      harga: Number(wisataForm.harga || 0),
      gambar: wisataForm.gambar,
    };

    try {
      if (activeEditId) {
        await apiFetch(`/wisata/${activeEditId}`, {
          method: "PATCH",
          body: JSON.stringify(payload),
        });
      } else {
        await apiFetch("/wisata", {
          method: "POST",
          body: JSON.stringify(payload),
        });
      }
      await loadWisata();
      resetWisataForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan wisata.");
    }
  };

  const handleEdit = (item: Wisata) => {
    setActiveEditId(item.id);
    setWisataForm({
      nama: item.nama,
      deskripsi: item.deskripsi,
      lokasi: item.lokasi,
      harga: String(item.harga ?? ""),
      gambar: item.gambar,
    });
  };

  const handleDelete = async (id: number) => {
    setError(null);
    try {
      await apiFetch(`/wisata/${id}`, { method: "DELETE" });
      await loadWisata();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menghapus wisata.");
    }
  };

  const submitReview = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    const payload = {
      nama: reviewForm.nama,
      komentar: reviewForm.komentar,
      rating: Number(reviewForm.rating || 0),
    };

    try {
      await apiFetch("/review", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      setReviewForm({ nama: "", komentar: "", rating: "5" });
      await loadReviews();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan review.");
    }
  };

  if (!hasCheckedAuth || !isAuthenticated) {
    return null;
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <div className="brand">PBS Admin</div>
          <p className="note">Base API: {API_BASE}</p>
        </div>
        <div className="nav-list">
          <button
            type="button"
            className={`nav-pill ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
            disabled={!isAuthenticated}
          >
            Dashboard
          </button>
          <button
            type="button"
            className={`nav-pill ${activeTab === "wisata" ? "active" : ""}`}
            onClick={() => setActiveTab("wisata")}
            disabled={!isAuthenticated}
          >
            Wisata
          </button>
          <button
            type="button"
            className={`nav-pill ${activeTab === "review" ? "active" : ""}`}
            onClick={() => setActiveTab("review")}
            disabled={!isAuthenticated}
          >
            Review
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-row">
            <div>
              <h1 className="admin-title">Panel Admin Wisata</h1>
              <p className="admin-subtitle">
                Kelola destinasi wisata, unggah konten, dan lihat review terbaru
                dari pengunjung. Semua perubahan langsung tersimpan di backend
                PBS.
              </p>
            </div>
            <div className="header-actions">
              <button className="btn btn-ghost" onClick={loadWisata}>
                {loadingWisata ? "Memuat Wisata..." : "Refresh Wisata"}
              </button>
              <button className="btn btn-ghost" onClick={loadReviews}>
                {loadingReview ? "Memuat Review..." : "Refresh Review"}
              </button>
            </div>
          </div>
            {activeTab === "dashboard" ? (
              <div className="dashboard-grid">
                <div className="stats-grid">
                  <div className="card stat-card">
                    <p className="note">Total Wisata</p>
                    <h3 className="stat-value">{wisata.length}</h3>
                    <p className="status">Aktif di sistem</p>
                  </div>
                  <div className="card stat-card">
                    <p className="note">Total Review</p>
                    <h3 className="stat-value">{reviews.length}</h3>
                    <p className="status">Masuk hari ini</p>
                  </div>
                </div>
                <div className="card chart-card">
                  <div className="chart-header">
                    <div>
                      <h3 className="card-title">Distribusi Rating</h3>
                      <p className="note">Review pengunjung berdasarkan bintang</p>
                    </div>
                    <span className="pill">Skala 1-5</span>
                  </div>
                  <div className="chart">
                    {ratingStats.buckets.map((item) => (
                      <div key={item.rating} className="chart-row">
                        <span className="chart-label">{item.rating}</span>
                        <div className="chart-track">
                          <div
                            className="chart-bar"
                            style={{
                              width: `${(item.count / ratingStats.maxCount) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="chart-value">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          {error ? <div className="note">{error}</div> : null}
        </header>

          {activeTab === "dashboard" ? null : (
            <section className="content-grid">
          <div className="stack">
              {activeTab !== "review" ? (
                <div className="card">
                  <h2 className="card-title">
                    {activeEditId ? "Edit Wisata" : "Tambah Wisata"}
                  </h2>
                  <form onSubmit={submitWisata}>
                    <div className="form-grid">
                      <label className="field">
                        Nama
                        <input
                          type="text"
                          value={wisataForm.nama}
                          onChange={(event) =>
                            setWisataForm((prev) => ({
                              ...prev,
                              nama: event.target.value,
                            }))
                          }
                          required
                        />
                      </label>
                      <label className="field">
                        Lokasi
                        <input
                          type="text"
                          value={wisataForm.lokasi}
                          onChange={(event) =>
                            setWisataForm((prev) => ({
                              ...prev,
                              lokasi: event.target.value,
                            }))
                          }
                          required
                        />
                      </label>
                      <label className="field">
                        Harga
                        <input
                          type="number"
                          value={wisataForm.harga}
                          onChange={(event) =>
                            setWisataForm((prev) => ({
                              ...prev,
                              harga: event.target.value,
                            }))
                          }
                          required
                        />
                        <span className="note">{hargaPreview}</span>
                      </label>
                      <label className="field">
                        URL Gambar
                        <input
                          type="text"
                          value={wisataForm.gambar}
                          onChange={(event) =>
                            setWisataForm((prev) => ({
                              ...prev,
                              gambar: event.target.value,
                            }))
                          }
                          required
                        />
                      </label>
                    </div>
                    <label className="field">
                      Deskripsi
                      <textarea
                        value={wisataForm.deskripsi}
                        onChange={(event) =>
                          setWisataForm((prev) => ({
                            ...prev,
                            deskripsi: event.target.value,
                          }))
                        }
                        required
                      />
                    </label>
                    <div className="button-row">
                      <button className="btn btn-primary" type="submit">
                        {activeEditId ? "Simpan Perubahan" : "Simpan Wisata"}
                      </button>
                      <button
                        className="btn btn-ghost"
                        type="button"
                        onClick={resetWisataForm}
                      >
                        Reset Form
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}

              {activeTab !== "wisata" ? (
                <div className="card">
                  <h2 className="card-title">Tambah Review</h2>
                  <form onSubmit={submitReview}>
                    <div className="form-grid single">
                      <label className="field">
                        Nama
                        <input
                          type="text"
                          value={reviewForm.nama}
                          onChange={(event) =>
                            setReviewForm((prev) => ({
                              ...prev,
                              nama: event.target.value,
                            }))
                          }
                          required
                        />
                      </label>
                      <label className="field">
                        Komentar
                        <textarea
                          value={reviewForm.komentar}
                          onChange={(event) =>
                            setReviewForm((prev) => ({
                              ...prev,
                              komentar: event.target.value,
                            }))
                          }
                        />
                      </label>
                      <label className="field">
                        Rating
                        <select
                          value={reviewForm.rating}
                          onChange={(event) =>
                            setReviewForm((prev) => ({
                              ...prev,
                              rating: event.target.value,
                            }))
                          }
                        >
                          {["1", "2", "3", "4", "5"].map((value) => (
                            <option key={value} value={value}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="button-row">
                      <button className="btn btn-primary" type="submit">
                        Simpan Review
                      </button>
                      <span className="pill">Tanpa edit/hapus</span>
                    </div>
                    <p className="note">
                      Endpoint review hanya mendukung list + create.
                    </p>
                  </form>
                </div>
              ) : null}
          </div>

          <div className="stack">
              {activeTab !== "review" ? (
                <section className="card">
                  <div className="button-row">
                    <h2 className="card-title">Daftar Wisata</h2>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nama</th>
                        <th>Lokasi</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wisata.map((item) => (
                        <tr key={item.id}>
                          <td>{item.nama}</td>
                          <td>{item.lokasi}</td>
                          <td>{`Rp ${new Intl.NumberFormat("id-ID").format(
                            item.harga,
                          )}`}</td>
                          <td>
                            <div className="table-actions">
                              <button
                                className="btn btn-ghost"
                                type="button"
                                onClick={() => handleEdit(item)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-accent"
                                type="button"
                                onClick={() => handleDelete(item.id)}
                              >
                                Hapus
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {wisata.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="note">
                            {loadingWisata
                              ? "Memuat data wisata..."
                              : "Belum ada data wisata."}
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </section>
              ) : null}

              {activeTab !== "wisata" ? (
                <section className="card">
                  <div className="button-row">
                    <h2 className="card-title">Review Terbaru</h2>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nama</th>
                        <th>Komentar</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((item) => (
                        <tr key={item.id}>
                          <td>{item.nama}</td>
                          <td>{item.komentar}</td>
                          <td>
                            <span className="pill">{item.rating} / 5</span>
                          </td>
                        </tr>
                      ))}
                      {reviews.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="note">
                            {loadingReview
                              ? "Memuat review..."
                              : "Belum ada review."}
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </section>
              ) : null}
          </div>
          </section>
        )}
      </main>
    </div>
  );
}
