require 'byebug'

def sluggish_octopus(arr)
    #Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths
    res = ""
    arr.each do |fish1|
        longest  = fish1 
        arr.each do |fish2|
            longest = fish2 if fish2.length > fish1.length
        end
        res = longest if longest.length > res.length
    end
    res
end

# p sluggish_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def dominant_octopus(arr)
    return arr if arr.length <= 1
    left = arr.take(arr.length/2)
    right = arr.drop(arr.length/2)
    merge(dominant_octopus(left), dominant_octopus(right))
end

def merge(left, right)
    merged = []
    until left.empty? || right.empty?
        if left.first.length > right.first.length
            merged << right.shift
        else
            merged << left.shift
        end
    end
    merged + left + right
end

# p dominant_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']).last

def clever_octopus(arr)
    longest = ""
    arr.each do |el|
        longest = el if el.length > longest.length
    end
    longest
end

p clever_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])