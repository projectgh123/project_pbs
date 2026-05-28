"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoginResponse = {
  token?: string;
  access_token?: string;
  message?: string;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.trim() || "http://localhost:3000";

export default function AdminLoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const resolveToken = (payload?: LoginResponse | null) => {
    if (!payload) return null;
    return payload.token || payload.access_token || null;
  };

  useEffect(() => {
    const stored = window.localStorage.getItem("pbs-auth");
    if (stored) {
      const parsed = JSON.parse(stored) as LoginResponse;
      if (resolveToken(parsed)) {
        router.replace("/admin");
      }
    }
  }, [router]);

  const submitLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      const payload = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      }).then((res) => res.json());

      if (!resolveToken(payload)) {
        setError(payload?.message || "Login gagal.");
        return;
      }

      window.localStorage.setItem("pbs-auth", JSON.stringify(payload));
      router.replace("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login gagal.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-panel card">
        <div className="login-header">
          <h1 className="admin-title">PBS Admin</h1>
          <span className="login-divider" />
        </div>
        <p className="admin-subtitle">
          Masuk untuk mengelola data wisata dan review pengunjung.
        </p>
        <form onSubmit={submitLogin}>
          <div className="form-grid single">
            <label className="field">
              Email
              <input
                type="email"
                placeholder="admin@pbs.id"
                value={loginForm.email}
                onChange={(event) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
                required
              />
            </label>
            <label className="field">
              Password
              <input
                type="password"
                placeholder="Minimal 6 karakter"
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
                required
              />
            </label>
          </div>
          <div className="button-row login-actions">
            <button className="btn btn-primary" type="submit">
              Masuk
            </button>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => {
                setLoginForm({ email: "", password: "" });
                setError(null);
              }}
            >
              Reset
            </button>
          </div>
          {error ? <p className="note">{error}</p> : null}
        </form>
      </div>
    </div>
  );
}
