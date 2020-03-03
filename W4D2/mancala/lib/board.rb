class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @cups = Array.new(14)
    (0...@cups.length).each do |idx|
      @cups[idx] = [:stone, :stone, :stone, :stone] unless idx == 6 || idx == 13
      @cups[idx] = [] if idx == 6 || idx == 13
    end
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless (0...@cups.length).include?(start_pos)
    raise "Starting cup is empty" if @cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos].dup
    @cups[start_pos] = []
    until stones.empty?
      start_pos += 1
      @cups[start_pos] << stones.shift
    end
    self.render
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
