class Post < ApplicationRecord
    belongs_to :user
    validates :title, presence: true
    validates :slug, uniqueness: true
    validate :slug_not_changed
    validates  :user_id, :title, presence: true

    before_create :set_slug

    private

    def set_slug
        itr = 1
        loop do
            title_slug = title.parameterize
            slug_candidate = itr > 1 ? "#{title_slug}-#{itr}" : title_slug
            break self.slug = slug_candidate unless Post.exists?(slug: slug_candidate)
            itr += 1
        end
    end

    def slug_not_changed
        if slug_changed? && self.persisted?
          errors.add(:slug, 'is immutable!')
        end
    end
end
