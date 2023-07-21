import java.util.*;

public class OOPS {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    char[][] board = new char[9][9];
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        board[i][j] = sc.next().charAt(0);
      }
    }
    sc.close();
    if (solveSudoku(board)) System.out.println(
      "correct"
    ); else System.out.println("incorrect");
  }


public static boolean solveSudoku(char[][] board) {
    // your code here
	  return helper(board, 0, 0);
	  
  }
  public static boolean isSafe(char[][] board, int row, int col, int number){
	  int rw = (row/3)*3;
	  int cw = (col/3)*3;
	  for(int i=0; i<board.length-1; i++){
		  if(board[i][col]==(char)(number + '0')){
			  return false;
		  }
		  if(board[row][i]==(char)(number + '0')){
			  return false;
		  }
	  }
	  for(int j=rw; j<rw+3; j++){
		  for(int k=cw; k<cw+3; k++){
			  if(board[j][k]==(char)(number + '0')){
				  return false;
			  }
		  }
	  }
	  return true;
  }
  public static boolean helper(char[][] board, int row, int col){
	  if(row == board.length){
		  return true;
	  }
	  int nrow = 0;
	  int ncol = 0;
	  if(col != board.length-1){
		  nrow = row;
		  ncol = col + 1;
	  }else{
		  nrow = row + 1;
		  ncol = 0;
	  }
	  if(board[row][col]!='.'){
		  if(helper(board, nrow, ncol)){
			  return true;
		  }
	  }else{
		  for(int i=1; i<=9; i++){
			  if(isSafe(board, row, col, i )){
				  board[row][col] = (char)(i+'0');
				  if(helper(board, nrow, ncol)){
					  return true;
				  }else{
					  board[row][col] = '.';
				  }
			  }
			  
		  }
	  }
	  return false;
  }
}