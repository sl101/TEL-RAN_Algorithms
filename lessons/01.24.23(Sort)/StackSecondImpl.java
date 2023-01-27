package com.telran.stacks;

public class StackSecondImpl {
    private int[] arr = new int[1000];
    private int currIdx = 0; // index of element next to top

    // O(1)
    void push(int elem) {
        arr[currIdx] = elem;
        currIdx++;
        // arr.push()
    }

    // O(1)
    int pop() {
        //arr = [5,7,6,8,9, _], currIdx = 5
        currIdx--;// if currIdx = 0 then arr[-1]
        if (currIdx < 0) {
            // throw Error("Stack is empty")
            return -1;
        }

        int res = arr[currIdx];
        arr[currIdx] = -1;
        return res;
    }

    boolean isEmpty() {
        return currIdx == 0;
    }

    int peek() {
        return arr[currIdx - 1];
    }
}
