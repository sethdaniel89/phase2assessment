post '/items/:item_id/bids/new' do
  if logged_in?
    bidded_item = Item.find(params[:item_id].to_i)

    if params[:bid_amount].to_f > bidded_item.price
      bidded_item.bids.new(bid_amount: params[:bid_amount].to_f, bidder: User.find(current_user.id))
      # binding.pry
      bidded_item.assign_attributes(price: params[:bid_amount].to_f)
      bidded_item.save
      redirect "/items/#{bidded_item.id}"
    else
      @errors = ["Bid must be higher than current price"]
      @item = bidded_item
      erb :'items/show'
    end
  else
    redirect '/sessions/login'
  end
end
