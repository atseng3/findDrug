class FindController < ApplicationController
	def drug
		flash[:page] = 'landing'

		render :drug
	end

	def submit
		@name = drug_params['name']
		if @name != ''
			@drugs = Find.where('name like ?', "%#{@name}%")
			flash[:page] = 'results'
		else 
			@drugs = []
		end
		render :submit
	end

	private

	def drug_params
		params.require(:find).permit(:name)
	end
end
