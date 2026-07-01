export const Home = () => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AgentClinic</title>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
        }

        header {
          background-color: #2c3e50;
          color: white;
          padding: 2rem;
          text-align: center;
        }

        header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background-color: white;
          min-height: calc(100vh - 200px);
        }

        main h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        main p {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </head>
    <body>
      <header>
        <h1>AgentClinic</h1>
      </header>
      <main>
        <h2>AgentClinic is open for business</h2>
        <p>Welcome to AgentClinic, a course project demonstrating spec-driven development with AI coding agents.</p>
      </main>
    </body>
  </html>
);
