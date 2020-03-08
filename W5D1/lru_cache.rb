class LRUCache

    def initialize(size)
        @cache = Array.new
        @size = size
    end

    def count 
        @cache.length
    end

    def size
        @size
    end

    def add(ele)
        @cache.delete(ele) if @cache.include?(ele)
        @cache.push(ele)          
        @cache.shift if count > size
    end

    def show 
        @cache
    end
    
end