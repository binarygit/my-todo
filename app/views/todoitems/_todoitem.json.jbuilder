json.extract! todoitem, :id, :content, :completed, :created_at, :updated_at
json.url todoitem_url(todoitem, format: :json)
