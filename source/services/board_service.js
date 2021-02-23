const pool = require('../database/pool');
const BoardQuery = require('../queries/board_query');

exports.getBoard = async(boardId) => {
    try{
        let data = await pool.query(BoardQuery.getBoard, [boardId]);
        return data[0];
    } catch(err){
        console.log(err);
        throw Error(err)
    }
}