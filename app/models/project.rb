class Project < ActiveRecord::Base
  has_many :todos, -> { order :position }
  accepts_nested_attributes_for :todos, allow_destroy: true
  validates_presence_of :name
end
