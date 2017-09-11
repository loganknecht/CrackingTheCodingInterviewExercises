# !!!!!!!!!!!!!!!!!!!!!!
# THIS DOES NOT WORK!!!!
# !!!!!!!!!!!!!!!!!!!!!!
import random

unsorted_array = []
static_array = [7, 9, 7, 4, 2, 4, 8, 2]

for i in range(5):
    unsorted_array.append(random.randrange(0, 10))


def partition(array, low_index, high_index):
    # Picks the last index as the choice for pivot
    pivot = array[low_index]

    index_was_bigger = False
    while index_was_bigger != True:
        up = None
        down = None
        for i in range(high_index):
            if array[i] > pivot:
                up = i

        for i in range(high_index):
            reverse_index = high_index - i
            if array[reverse_index] < pivot:
                down = reverse_index

        print("Up: {}".format(up))
        print("Down: {}".format(down))

        if(up is not None and
                down is not None):
            if up < down:
                array[down] = pivot
                index_was_bigger = True
            else:
                temp = array[down]
                array[down] = array[up]
                array[up] = temp

    return array


def quicksort(array):
    return partition(array, 0, (len(array) - 1))

if __name__ == '__main__':
    print("// " + "-" * 80)
    print("// Static Array")
    print("// " + "-" * 80)
    print(static_array)

    print()

    print("// " + "-" * 80)
    print("// Unsorted Array")
    print("// " + "-" * 80)
    print(unsorted_array)

    print()

    print("// " + "-" * 80)
    print("// Sorted Static Array")
    print("// " + "-" * 80)
    print(quicksort(static_array))
