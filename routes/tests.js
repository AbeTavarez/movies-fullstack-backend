import { Router } from "express";

const router = new Router();

/**
 * POST /signin
 */
router.get("/", async (req, res) => {
  res.send(`
    <div>
        <h2>You got Data!</h2>
    </div>
    `);
});

router.post("/", (req, res) => {
  res.send(`
    <div>
    <h2>You said: ${req.body.message}</h2>
</div>
    `);
});

router.put("/", (req, res) => {
  res.send(`
    <div>
    <h2>Account Updated</h2>
    </div>
    `);
});

router.delete("/", (req, res) => {
  res.send(`
  <div>
    <h2>Account Deleted</h2>
</div>
    `);
});

export default router;
