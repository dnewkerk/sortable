class Todo < ActiveRecord::Base
  belongs_to :project
  validates :name, presence: { message: "cannot be blank" }
  validates :position, presence: true, numericality: { only_integer: true }
end
