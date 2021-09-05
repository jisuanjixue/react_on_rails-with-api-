# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: PostSerializer.new(@posts).serializable_hash.to_json, status: :ok
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: PostSerializer.new(@post).serializable_hash.to_json, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

    def post_params
      params.require(:post).permit(:title)
    end
end
