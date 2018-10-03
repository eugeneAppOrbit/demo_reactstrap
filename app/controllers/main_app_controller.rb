# frozen_string_literal: true

class MainAppController < ApplicationController
  layout "main"

  def index
    @app_props = { name: "Test Demo App" }
  end
end
