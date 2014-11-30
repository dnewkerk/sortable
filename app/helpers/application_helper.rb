module ApplicationHelper

  # Bootstrap CSS classes for flash messages.
  def bootstrap_class_for(flash_type)
    case flash_type
      when :notice
        "alert-info"
      when :success
        "alert-success"
      when :alert
        "alert-warning"
      when :error
        "alert-danger"
      else
        "alert-info " + flash_type.to_s
    end
  end

end
