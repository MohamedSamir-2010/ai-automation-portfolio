export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
        background: "#0f172a",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <p style={{ color: "#38bdf8", fontSize: "18px" }}>
          AI AUTOMATION PORTFOLIO
        </p>

        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Mohamed Samir
        </h1>

        <h2
          style={{
            fontSize: "32px",
            color: "#cbd5e1",
          }}
        >
          AI Automation Engineer
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            color: "#94a3b8",
            maxWidth: "700px",
          }}
        >
          I design intelligent automation systems using n8n, AI,
          APIs, Google Workspace, and modern automation tools.
        </p>

        <section style={{ marginTop: "70px" }}>
          <h2 style={{ fontSize: "32px" }}>
            Featured Project
          </h2>

          <div
            style={{
              marginTop: "25px",
              padding: "30px",
              border: "1px solid #334155",
              borderRadius: "15px",
              background: "#1e293b",
            }}
          >
            <h3 style={{ fontSize: "26px" }}>
              AI-Powered Lead Qualification System
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.6",
              }}
            >
              An intelligent n8n automation that receives incoming
              leads, analyzes their business requirements using AI,
              calculates lead scores, and triggers personalized
              follow-up actions.
            </p>

            <p style={{ color: "#38bdf8" }}>
              n8n • AI • Gmail • Google Sheets
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
