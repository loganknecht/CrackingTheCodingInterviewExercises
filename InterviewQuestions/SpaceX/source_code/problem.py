def get_original_intersection():
    partList = ["booster", "grid fin"]
    otherPartList = ["landing leg", "booster"]

    intersect = []
    for part in partList:
        for otherPart in otherPartList:
            if part == otherPart:
                # print "{}".format(part)
                # Instead of printing, we'll just append it
                intersect.append(part)


def get_simple_intersection():
    partList = ["booster", "grid fin"]
    otherPartList = ["landing leg", "booster"]
    return list(set(partList) & set(otherPartList))


def get_list_comprehension():
    partList = ["booster", "grid fin"]
    otherPartList = ["landing leg", "booster"]
    return [part
            for part in partList
            if part in otherPartList]

if __name__ == "__main__":
    import timeit
    original_setup = "from __main__ import get_original_intersection"
    simple_setup = "from __main__ import get_simple_intersection"
    list_comprehension_setup = "from __main__ import get_list_comprehension"

    print "Original intersection time: {}".format(timeit.timeit("get_original_intersection()", setup=original_setup))
    print "Simple intersection time: {}".format(timeit.timeit("get_simple_intersection()", setup=simple_setup))
    print "List comprehension intersection time: {}".format(timeit.timeit("get_list_comprehension()", setup=list_comprehension_setup))
