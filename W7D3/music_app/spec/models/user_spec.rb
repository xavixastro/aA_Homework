require 'rails_helper'

RSpec.describe User, type: :model do

  describe "validations" do
    it {should validate_presence_of(:email)}
    it {should validate_presence_of(:password_digest)}
    it {should validate_length_of(:password).is_at_least(6)}
  end

  describe "class methods" do 
    describe "::find_by_credentials" do
      it "should find a user with valid credentials" do
        user = User.create(email: "javi@aa.io", password:"123456")
        expect(User.find_by_credentials("javi@aa.io", "123456")).to eq(user)
      end
      it "should NOT find a user with invalid credentials" do
        user = User.create(email: "jay@aa.io", password:"123456")
        expect(User.find_by_credentials("jay@aa.io", "123457")).not_to eq(user)
      end
    end

    describe "#reset_session_token" do
      it "should reset the user's session token value" do
        user = User.create(email: "javi@aa.io", password:"123456")
        session_token = user.session_token
        user.reset_session_token!
        expect(user.session_token).not_to eq(session_token)
      end

    end

  end
end
