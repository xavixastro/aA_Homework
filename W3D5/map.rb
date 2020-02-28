class Map
    def initialize
        @map = Array.new
    end

    def set(key, value)
        @map.each_with_index do |pair, idx|
            if pair.first == key
                @map[idx][1] = value
                return value
            end
        end
        @map.push([key,value])
    end

    def get(key)
        @map.each do {|pair| return pair[1] if pair[0] == key}
    end

    def delete(key)
        @map.each do {|pair| @map.delete(pair) if pair[0] == key}
    end

    def show
        @map
    end

end