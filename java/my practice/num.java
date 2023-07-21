import java.util.*;

public class num {
    public static void main(String[] args) throws Throwable {
        Scanner sc = new Scanner(System.in);
		String s = sc.next();
        sc.close();
        boolean ans = Solution.isValid(s);
        if(ans){
			System.out.print("true");
		}else{
			System.out.println("false");
		}
    }
}

class Solution {
    public static boolean isValid(String s) {
        int a = 0;
        int b = 0;
        int c = 0;
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i)=='('||s.charAt(i)==')'){
                a++;
            }else if (s.charAt(i)=='{'||s.charAt(i)=='}'){
                b++;
            }else if(s.charAt(i)=='['||s.charAt(i)==']'){
                c++;
            }
        }
        if(a%2==0 && b%2==0 && c%2==0){
            for(int i=1; i<s.length()-1; i++){
                if((s.charAt(i)=='(' && s.charAt(i+1)==']' || s.charAt(i+1)=='}')||
            (s.charAt(i)==')' && s.charAt(i-1)=='[' || s.charAt(i-1)=='{')
            ||(s.charAt(i)=='[' && s.charAt(i+1)==')' || s.charAt(i+1)=='}')||
            (s.charAt(i)==']' && s.charAt(i-1)=='(' || s.charAt(i-1)=='{')
            ||(s.charAt(i)=='{' && s.charAt(i+1)==')' || s.charAt(i+1)==']')||
            (s.charAt(i)=='}' && s.charAt(i-1)=='(' || s.charAt(i-1)=='[')){
                return false;
            }
        }
        }else{
            return false;
        }
		return true;
    }
}