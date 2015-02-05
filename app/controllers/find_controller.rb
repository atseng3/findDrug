class FindController < ApplicationController
	def drug
		# @drugs = Find.parsed_drugs

		render :drug
	end

	def submit
		name = drug_params['name']
		@drugs = Find.where('name like ?', "%#{name}%")
		# fail
		# if @drugs.count == 0
		# 	@results = nil
		# else
		# 	@results = @drugs
		# end
		render :submit
		# @drugs = Find.parsed_drugs
		# drug_params['name'].downcase!
		# if !@drugs[drug_params['name']]
		# 	@results = nil
		# else 
		# 	@results = { name: drug_params['name'] }
		# 	@results = @results.merge(@drugs[drug_params['name']])
		# end
		# render :submit
	end

	private

	def drug_params
		params.require(:find).permit(:name)
	end
end
