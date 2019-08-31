import pt from 'prop-types'

/**
 * @typedef {'king'|'queen'|'rook'|'bishop'|'knight'|'pawn'} Piece
 * @typedef {'normal'|'available'|'selected'} Mode
 * 
 * @typedef {object} ChessPieceProps
 * @prop {Mode} mode
 * @prop {Piece} piece
 */

export const ChessPieceType = pt.oneOf(['king'|'queen'|'rook'|'bishop'|'knight'|'pawn'])
export const ChessPieceMode = pt.oneOf(['normal'|'available'|'selected'])
export const ChessPieceProps = pt.shape({
  mode: ChessPieceMode,
  piece: ChessPieceType
})
