import java.util.*;
public class palindrome {
    public static void main(String [] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        sc.close();
        if(isPalindrome(str)){
            System.out.print("true");
        }else{
            System.out.print("false");
        }
        
    }
    public static boolean isPalindrome(String str) {
        int n = str.length()-1;
        for(int i=0; i<str.length()/2; i++){
            if((str.charAt(i))!=(str.charAt(n-i))){
                return false;
            }
        }
        return true;
    }
}
