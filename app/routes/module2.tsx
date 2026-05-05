export default function Module2() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📚 Module 2: Node.js Backend Development</h1>
      <p>Build scalable server-side applications with Node.js</p>
      
      <h2>Learning Objectives</h2>
      <ul>
        <li>Node.js runtime and event loop</li>
        <li>Express.js web framework</li>
        <li>RESTful API design and implementation</li>
        <li>Middleware and request handling</li>
        <li>Error handling and logging</li>
      </ul>

      <h2>Key Topics</h2>
      <ol>
        <li><strong>Node.js Fundamentals</strong>
          <ul>
            <li>Modules and npm packages</li>
            <li>Async/await and Promises</li>
            <li>File system operations</li>
            <li>Streams and buffers</li>
          </ul>
        </li>
        <li><strong>Express.js Framework</strong>
          <ul>
            <li>Route handlers and middleware</li>
            <li>Request/response cycle</li>
            <li>Template engines</li>
            <li>Static file serving</li>
          </ul>
        </li>
        <li><strong>API Development</strong>
          <ul>
            <li>HTTP methods (GET, POST, PUT, DELETE)</li>
            <li>Status codes and headers</li>
            <li>Request validation</li>
            <li>Authentication basics</li>
          </ul>
        </li>
      </ol>

      <h2>Project: Build a Music API</h2>
      <p>Create a RESTful API with:</p>
      <ul>
        <li>GET /api/songs - List all songs</li>
        <li>GET /api/songs/:id - Get song details</li>
        <li>POST /api/songs - Create new song</li>
        <li>PUT /api/songs/:id - Update song</li>
        <li>DELETE /api/songs/:id - Delete song</li>
        <li>Input validation and error handling</li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li><a href="https://nodejs.org/docs" target="_blank">Node.js Documentation</a></li>
        <li><a href="https://expressjs.com" target="_blank">Express.js Guide</a></li>
        <li><a href="https://npm.js.com" target="_blank">NPM Registry</a></li>
      </ul>
    </div>
  );
}
