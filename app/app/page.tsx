
"use client";

import { useState } from "react";
import {
  Smartphone, Users, ClipboardList, ShieldCheck,
  Wallet, History, Settings, Wrench, Search,
  ArrowLeft, Tags
} from "lucide-react";

const menus = [
  { nome: "Ordens de serviço", icone: ClipboardList },
  { nome: "Clientes", icone: Users },
  { nome: "Garantias", icone: ShieldCheck },
  { nome: "Tabela de preços", icone: Tags },
  { nome: "Financeiro", icone: Wallet },
  { nome: "Histórico", icone: History },
  { nome: "Pré-diagnóstico", icone: Wrench },
  { nome: "Configurações", icone: Settings },
];

export default function Home() {
  const [pagina, setPagina] = useState("Início");

  return (
    <main style={{
      minHeight: "100vh",
      padding: "24px 16px",
      maxWidth: 900,
      margin: "auto"
    }}>
      <header style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 32
      }}>
        <div style={{
          background: "#ff7900",
          borderRadius: 14,
          padding: 12
        }}>
          <Smartphone color="black" size={28} />
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 25 }}>
            HS <span style={{ color: "#ff7900" }}>
              CELULARES
            </span>
          </h1>
          <small style={{ color: "#aaa" }}>
            Sistema de gerenciamento
          </small>
        </div>
      </header>

      {pagina === "Início" ? (
        <>
          <h2>Painel de controle</h2>
          <p style={{ color: "#999" }}>
            Gerencie sua assistência técnica.
          </p>

          <section style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(145px, 1fr))",
            gap: 14,
            marginTop: 25
          }}>
            {menus.map(({ nome, icone: Icone }) => (
              <button
                key={nome}
                onClick={() => setPagina(nome)}
                style={{
                  background:
                    "linear-gradient(145deg, #252525, #101010)",
                  color: "white",
                  border: "1px solid #383838",
                  borderRadius: 18,
                  padding: "25px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                  cursor: "pointer",
                  boxShadow: "0 6px 18px #0008"
                }}
              >
                <Icone size={32} color="#ff7900" />
                <strong>{nome}</strong>
              </button>
            ))}
          </section>
        </>
      ) : (
        <section>
          <button
            onClick={() => setPagina("Início")}
            style={{
              background: "#ff7900",
              color: "#000",
              border: 0,
              padding: 12,
              borderRadius: 10,
              fontWeight: "bold"
            }}
          >
            <ArrowLeft size={16} /> Voltar
          </button>

          <h2 style={{ marginTop: 30 }}>{pagina}</h2>
          <p style={{ color: "#aaa" }}>
            Módulo em desenvolvimento.
          </p>
        </section>
      )}

      <footer style={{
        marginTop: 60,
        textAlign: "center",
        color: "#777",
        fontSize: 12
      }}>
        HS CELULARES © 2026
      </footer>
    </main>
  );
}
