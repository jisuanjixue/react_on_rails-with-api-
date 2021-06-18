class TokensController < ApplicationController

  def create
    @user = User.find_by_email(params[:email])
    unless  @user.password_digest == params[:password_digest]
      head 401 
      return
    end

    payload = {user_id: @user.id}
    exp_time = 72.hours.from_now
    if (JsonWebToken rescue nil) 
      token = JsonWebToken.encode(payload, exp_time) 
      request.headers['Authorization'] = token
      render json: {error_code:0,  token:token, exp_time:exp_time }, status: :ok
      return
    else
      head 401
    end
  end
end
