const router = require('express').Router();
const { validateCreateCard, validateCard } = require('../middlewares/validation');

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', validateCreateCard, createCard);
router.delete('/:cardId', validateCard, deleteCard);
router.put('/:cardId/likes', validateCard, likeCard);
router.delete('/:cardId/likes', validateCard, dislikeCard);

module.exports = router;
