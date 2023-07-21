		
import java.util.*;

public class Main
{
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int a = 1;



for(int i=1; i<=n; i++){
		for(int j=1; j<=n-i; j++){
			System.out.print(" ");
		}if(i==n){
		    for(int k=1; k<=n; k++){
			System.out.print("* ");

		    }
		    return;
		}
		for(int k=1; k<=1; k++){
			System.out.print("*");
		}
		if(i>=2){
		    for(int k=1; k<=a; k++){
		        System.out.print(" ");

		    }
		     a = a + 2;
		 for(int k=1; k<=1; k++){
			System.out.print("*");
		}
		}


		System.out.println();
	}

}
}