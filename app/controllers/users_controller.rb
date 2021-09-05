# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  # before_action :check_owner, only: %i[update destroy]
  before_action :check_admin, only: %i[index destroy]
  before_action :check_admin_or_owner, only: %i[update show]

  def show
    # options = { include: [:products] }
    render json: UserSerializer.new(@user).serializable_hash.to_json
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: UserSerializer.new(@user).serializable_hash.to_json, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: UserSerializer.new(@user).serializable_hash.to_json, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    head 204
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :password_digest)
    end

    def is_admin?
      current_user&.role == 0
    end

    def check_admin
      head 403 unless is_admin?
    end

    def is_owner?
      @user.id == current_user&.id
    end

    def check_admin_or_owner
      head 403 unless is_admin? || is_owner?
    end

  #   def check_owner
  #     head :forbidden unless @user.id == current_user&.id
  #   end
end
