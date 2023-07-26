# Divisibility Questions Solutions

## 1) Which one of the following numbers is divisible by 99?
### a) 3572404 b) 135792 c) 913464 d) 114345
To check whether the number is divisible by 99, we need to check that the number must be divided by 9 and 11 both.

Difference of the sum of the alternate digits is zero which is the condition for divisibility by 11. Sum of all its digits is divisible by 9 which is the condition for divisibility by 9.

Checking the divisibility by 9
```
3572404 = 3+5+7+2+4+4 = 25
135792 = 1+3+5+7+9+2 = 27
913464 = 9+1+3+4+6+4 = 27
114345 = 1+1+4+3+4+5 = 18

Here 135792,913464 and 114345 all are divisible by 9
```
Now let's check for 11

```
3572404 
=> Sum of Odd digits = 14
=> Sum of Even digits = 11
Difference = Odd - Even = 3

135792 
=> Sum of Odd digits = 15
=> Sum of Even digits = 12
Difference = Odd - Even = 3

913464 
=> Sum of Odd digits = 18
=> Sum of Even digits = 9
Difference = Odd - Even = 9

114345 
=> Sum of Odd digits = 9
=> Sum of Even digits = 9
Difference = Odd - Even = 0
```

Hence, 114345 is the number which satisfies both thye conditions of divisibility.

Therfore, 114345 is divisible by 99.

## 2) If n is an integer, what is the remainder when (2n + 2)^2 is divided by 4?

To find the remainder we need to simplify the equation (2n + 2)^2, which will be

```
(2n + 2)^2 = 4n^2 + 8n + 4 = 4(n^2+2n+1)
```
So clearly we can see that 4 is the multiple of the above equation, hence the remainder will be 0.

## 3) Find two nearest numbers to 19506 which are divisible by 9?

⇒  Divisibility rule of 9 : A number is divisible by 9 if the sum of its digits is divisible by 9.
```
⇒  19505=1+9+5+0+5=20 and 19509=1+9+5+0+9=24

∴    The numbers 19505,19509 are not divisible by 9.

⇒  19503=1+9+5+0+3=18 and 19512=1+9+5+1+2=18
```
∴   The two number 19503,19512 are divisible by 9.

## 4) What is the value of M and N respectively if M39048458N is divisible by 8 and 11, where M and N are single digit integers?

If the number is divisible by 8 then it's last three digits must be divisible by 8.

Therefore, 58N must be divisible by 8. Therefore, N=4

Now, for any number which is divisible by 11 we add the alternative sum of even position digits and odd position digits. For divisibility there must be a difference of any factor of 11

So,we have
```
Odd position sum=M+9+4+4+8=25+M

Even position sum=3+0+8+5+N=3+0+8+5+4=20

Therefore, the difference is (25+M)-20=5+M

For (5+M)to be a factor of 11 we have M=6.
```
So,M=6,N=4

## 5) How many pairs of X and Y are possible in the number 763X4Y2, if the number is divisible by 9?

If sum of all the digits is divisible by 9 then the number is divisible by 9. Given number is 763X4Y2.

Given number is divisible by 9.
so, 
```
7+6+3+X+4+Y+2 = 9K
22+X+Y = 9K
It is clear that LHS is divisible by 9, if ?? + ?? = 5,14.
Now sum of X and Y  is 11, then possible pairs are (1,4),(4,1),(2,3),(3,2),(0,5) and (5,0).

When sum of X and Y is 11, then the possible pairs are (5,9),(9,5),(6,8),(8,6) and (7,7)
```
Therefore there are total 11 possible pairs.

## 6) When the integer n is divided by 8, the remainder is 3. What is the remainder if 6n is divided by 8?

Let's first understand what is meant by remainder when an integer is divided by another integer. When one integer, say a, is divided by another integer, say b, the remainder is the integer that is left over after a is divided by b. 

For example, when 17 is divided by 3, we get a quotient of 5 and a remainder of 2, since 3 x 5 = 15 and 17 - 15 = 2.

Given information: When n is divided by 8, the remainder is 3.

This means that n can be written as:
n = 8q + 3, where q is some integer.

```
Now, we need to find the remainder when 6n is divided by 8.
6n = 6(8q + 3) = 48q + 18
We can write 48q as 8(6q), so:
6n = 8(6q) + 18
6n = 8(6q + 2) + 2
```
Therefore, when 6n is divided by 8, the remainder is 2.

## 7) If the product 4864 x 9P2 is divisible by 12, then what is the value of P?

Clearly, 4864 is divisible by 4.
So, 9P2 must be divisible by 3. So, (9+P+2) must be divisible by 3. Therefore P=1

## 8) If the number 7X86038 is exactly divisible by 11, then the smallest whole number in place of X?

Divisibility rule of 11-

The difference between the odd numbered digits and even numbered digits, taken from right or left is divisible by 11, the number is divisible by 11.

The number 7X86038 is exactly divisible by 11 

```
Sum of odd digits = 7+8+0+8 = 23
Sum of even digits = x+6+3 = 9 + x
=> 23-(9+x) should be divisible by 11.
=> 23-9-x = 14-x 

The least number should be 3. We get 14-3=11 which is divisible by 11.
```

So, X is equal to 3.

## 9) If an integer n is divisible by 3, 5 and 12, what is the next larger integer divisible by all these numbers?

If an integer n is divisible by 3, 5, and 12, it means that n is a common multiple of these numbers. To find the next larger integer divisible by all these numbers, we need to find their least common multiple (LCM).

The LCM of 3, 5, and 12 can be found by first finding the prime factorization of each number:

3 = 3,
5 = 5,
12 = 2^2 * 3

Now, the LCM is the product of the highest powers of each prime factor:

LCM = 2^2 * 3 * 5 = 60

So, the next larger integer divisible by 3, 5, and 12 is 60. (n + 60) is the correct answer.

## 10) What is the product of the largest and the smallest possible values of M for which a number 5M83M4M1 is divisible by 9?

Divisibility rule of  9: A number is divisible by 9, when the sum of the digits of the number is divisible by 9. 

Calculation: 5 + m + 8 + 3 + m + 4 + m + 1 = 9n  ⇒ 21 + 3m = 9n  ⇒ 7 + m = 3n (0, 9, 18, 27, 36.....) 

At n = 3,  ⇒ 7 + m = 3 × 3 ⇒ Minimum value of m = 2 At n = 5 ⇒ 7 + m = 3 × 5 ⇒ Maximum value of m = 8 

∴ The product of largest and smallest value of n ⇒ 2 × 8 = 16