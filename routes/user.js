const express = require('express');
const User = require('../controllers/user');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
    /** GET /api/users - Get list of users */
    .get(User.list)

/** POST /api/users - Create new user */
.post(User.create);

router.route('/:userId')
    /** GET /api/users/:userId - Get user */
    .get(User.get)

/** PUT /api/users/:userId - Update user */
.put(User.update)

/** DELETE /api/users/:userId - Delete user */
.delete(User.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', User.load);

module.exports = router;