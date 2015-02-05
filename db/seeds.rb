# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


require 'csv'
drugs = CSV.read("formulary_items.csv", {:headers => true})
drugs.each do |drug|
	n_drug = Find.new({ name: drug['name'].downcase, carrier: drug['carrier'], state: drug['state'], tier: drug['tier'], brand_or_generic: drug['brand_or_generic'] })
	if n_drug.valid?
		n_drug.save!
	end

end