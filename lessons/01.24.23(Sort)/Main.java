package com.telran.stacks;

public class Main {
    public static void main(String[] args) {
        StackSecondImpl stack = new StackSecondImpl();
        stack.push(45);
        stack.push(46);
        stack.push(23);

        System.out.println((stack.pop()));
        System.out.println((stack.pop()));
        System.out.println((stack.pop()));
    }
}
