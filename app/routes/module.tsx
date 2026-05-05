import { useParams } from "@remix-run/react";

const moduleContent: Record<string, { title: string; content: string }> = {
  module1: {
    title: "Remix + React Fundamentals",
    content: `<h2>Remix Fundamentals</h2>
      <p>Remix is the framework [untitled] uses for their frontend. Master these concepts:</p>
      
      <h3>Core Concepts</h3>
      <ul>
        ><strong>Loaders:</strong> Server-side data fetching (replaces getStaticProps)</li>
        ><strong>Actions:</strong> Server-side mutations</li>
        ><strong>useLoaderData:</strong> Access server data in components</li>
        ><strong>useFetcher:</strong> Mutations without navigation</li>
        ><strong>Nested Routes:</strong> Layout composition with &lt;Outlet /&gt;</li>
        ><strong>Pending UI:</strong> optimistic updates with useNavigation</li>
      </ul>

      <h3>Practice: Build a track list with Remix</h3>
      <pre>de>// loaders/track-list.ts
export async function loader() {
  const tracks = await db.track.findMany({
    include: { project: true, listens: true }
  });
  return json(tracks);
}

// routes/tracks.tsx
export default function Tracks() {
  const tracks = useLoaderData<typeof loader>();
  return (
    &lt;div&gt;
      {tracks.map(t => (
        &lt;TrackCard key={t.id} track={t} /&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre>

      <h3>Key Resources</h3>
      <ul>
        ><a href="https://remix.run/docs" target="_blank">Remix Official Docs</a></li>
        ><a href="https://remix.run/tutorials" target="_blank">Remix Tutorials</a></li>
        ><a href="https://www.youtube.com/watch?v=oaU2aQqbckM" target="_blank">Remix at React Summit</a></li>
      </ul>`
  },
  module2: {
    title: "Node.js Backend Development",
    content: `<h2>Node.js Backend</h2>
      <p>[untitled] needs heavy Node.js infrastructure for audio processing, APIs, and real-time sync.</p>
      
      <h3>Essential Topics</h3>
      <ul>
        ><strong>Express/Fastify:</strong> Building RESTful APIs</li>
        ><strong>Middleware patterns:</strong> Auth, logging, error handling</li>
        ><strong>Streams:</strong> Processing audio files efficiently</li>
        ><strong>Worker threads:</strong> CPU-intensive audio encoding</li>
        ><strong>Event emitters:</strong> Decoupled architecture</li>
        ><strong>Buffer manipulation:</strong> Binary audio data handling</li>
      </ul>

      <h3>Practice: Audio upload API</h3>
      <pre>de>import express from 'express';
import multer from 'multer';
import ffmpeg from 'fluent-ffmpeg';

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 200 * 1024 * 1024 } // 200MB
});

app.post('/api/tracks', upload.single('audio'), async (req, res) => {
  const track = await saveTrack(req.file, req.user);
  const metadata = await extractMetadata(req.file.buffer);
  res.json({ id: track.id, ...metadata });
});</code></pre>

      <h3>Resources</h3>
      <ul>
        ><a href="https://nodejs.org/en/docs/" target="_blank">Node.js Documentation</a></li>
        ><a href="https://expressjs.com/" target="_blank">Express.js Guide</a></li>
      </ul>`
  },
  module3: {
    title: "PostgreSQL + Redis Data Layer",
    content: `<h2>PostgreSQL + Redis</h2>
      <p>[untitled] stores millions of tracks. Learn database design at scale.</p>

      <h3>PostgreSQL Topics</h3>
      <ul>
        ><strong>Schema design:</strong> Tracks, Projects, Users, Collaborations</li>
        ><strong>Indexes:</strong> B-tree, GIN for full-text search</li>
        ><strong>JSONB:</strong> Storing track metadata</li>
        ><strong>Transactions:</strong> Atomic upload + metadata save</li>
        ><strong>Query optimization:</strong> EXPLAIN ANALYZE, query plans</li>
        ><strong>Connection pooling:</strong> pgBouncer or node-pool</li>
      </ul>

      <h3>Prisma Schema for [untitled] clone:</h3>
      <pre>de>model User {
  id        String   @id @default(cuid())
  email     String   @unique
  tracks    Track[]
  projects  Project[]
  listens   Listen[]
}

model Track {
  id          String   @id @default(cuid())
  title       String
  projectId   String
  audioUrl    String
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id])
  listens     Listen[]
  versions    TrackVersion[]
}

model Listen {
  id        String   @id @default(cuid())
  trackId   String
  userId    String   @unique
  timestamp DateTime @default(now())
}</code></pre>

      <h3>Redis Use Cases</h3>
      <ul>
        ><strong>Caching:</strong> Track lists, user profiles</li>
        ><strong>Real-time listeners:</strong> Redis pub/sub for "who's listening now"</li>
        ><strong>Rate limiting:</strong> API request throttling</li>
        ><strong>Session storage:</strong> User authentication</li>
      </ul>

      <h3>Practice: Redis listener tracking</h3>
      <pre>de>// When user plays a track
await redis.sadd(\`track:\${trackId}:listeners\`, userId);
await redis.expire(\`track:\${trackId}:listeners\`, 300); // 5 min TTL

// Get active listeners
const listeners = await redis.smembers(\`track:\${trackId}:listeners\`);</code></pre>`
  },
  module4: {
    title: "AWS Infrastructure",
    content: `<h2>AWS Infrastructure</h2>
      <p>[untitled] stores all audio on AWS. Learn the services they use.</p>

      <h3>Core AWS Services</h3>
      <ul>
        ><strong>S3:</strong> Audio file storage (their tracks)</li>
        ><strong>RDS (PostgreSQL):</strong> Database hosting</li>
        ><strong>ElastiCache (Redis):</strong> Caching layer</li>
        ><strong>CloudFront:</strong> CDN for audio streaming</li>
        ><strong>Lambda:</strong> Audio processing (transcoding, waveform gen)</li>
        ><strong>SQS:</strong> Async audio processing queue</li>
        ><strong>KMS:</strong> Encryption for unreleased music security</li>
      </ul>

      <h3>Practice: S3 signed URLs for secure uploads</h3>
      <pre>de>import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({ region: 'us-east-1' });

export async function getUploadUrl(trackId: string) {
  const command = new PutObjectCommand({
    Bucket: 'untitled-tracks',
    Key: \`\${trackId}.wav\`,
    ContentType: 'audio/wav',
  });
  return getSignedUrl(s3, command, { expiresIn: 3600 });
}</code></pre>

      <h3>AWS Audio Pipeline Architecture</h3>
      <pre>de>User → API Gateway → Lambda (presigned URL)
              ↓
         S3 Upload → S3 Event
              ↓
         SQS Queue → Lambda (transcode)
              ↓
         CloudFront CDN → User Playback</code></pre>`
  },
  module5: {
    title: "Terraform + Infrastructure as Code",
    content: `<h2>Terraform IaC</h2>
      <p>[untitled] uses Terraform to provision their AWS infrastructure. You must master this.</p>

      <h3>Core Terraform Concepts</h3>
      <ul>
        ><strong>Resources:</strong> S3 buckets, RDS instances, Lambda functions</li>
        ><strong>Providers:</strong> AWS, Vercel</li>
        ><strong>State management:</strong> Remote state with S3 backend</li>
        ><strong>Modules:</strong> Reusable infrastructure components</li>
        ><strong>Workspaces:</strong> Dev/staging/production environments</li>
        ><strong>Variables & outputs:</strong> Parameterized infrastructure</li>
      </ul>

      <h3>Practice: Terraform Stack for [untitled] clone</h3>
      <pre>de># main.tf
terraform {
  required_providers {
    aws    = { source = "hashicorp/aws" }
    vercel = { source = "vercel/vercel" }
  }
  backend "s3" {
    bucket = "untitled-terraform-state"
    key    = "production/terraform.tfstate"
    region = "us-east-1"
  }
}

resource "aws_s3_bucket" "tracks" {
  bucket = "untitled-audio-tracks"
}

resource "aws_rds_cluster" "postgres" {
  engine         = "aurora-postgresql"
  engine_version = "14.4"
  db_cluster_identifier = "untitled-db"
  master_username = "admin"
  master_password = var.db_password
}

resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "untitled-redis"
  engine               = "redis"
  node_type            = "cache.t3.micro"
  num_cache_nodes      = 1
  port                 = 6379
}</code></pre>

      <h3>Terraform Commands to Master</h3>
      <pre>de>terraform init      # Initialize providers
terraform plan        # Preview changes
