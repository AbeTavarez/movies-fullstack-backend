import {Router} from 'express';

const router = new Router();

/**
 * POST /signin
 */
router.get('/', async (req, res) => {
    res.send(`
    <div>
        <h2>You got Data!</h2>
    </div>
    `)
});

export default router;