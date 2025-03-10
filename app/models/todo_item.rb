class TodoItem < ApplicationRecord
  scope :completed, -> { where(completed: true) }
  scope :pending, -> { where.not(completed: true) }
end
