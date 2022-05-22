import React from "react";

const Summary = () => {
  return (
    <div class="py-20 bg-slate-100 mb-12 grid items-center justify-around grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class="stat text-center">
        <div class="stat-figure text-primary">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorM3YYgVGlbhgb3uS4r_zO8-947LIkW7WJg&usqp=CAU" className="w-20" alt="" />
        </div>
        <div class="stat-title">Total Customar</div>
        <div class="stat-value text-primary">15.6K</div>
        <div class="stat-desc">22% more than last month</div>
      </div>

      <div class="stat text-center">
        <div class="stat-figure text-secondary">
        <img src="https://static.vecteezy.com/system/resources/previews/002/641/119/original/fast-delivery-icon-vector.jpg" className="w-20" alt="" />
        </div>
        <div class="stat-title">Total Deliverd Quantity</div>
        <div class="stat-value text-secondary">2.6M</div>
        <div class="stat-desc">30% more than last year</div>
      </div>
      <div class="stat text-center">
        <div class="stat-figure text-primary">
        <img src="https://img.freepik.com/free-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg" className="w-20" alt="" />
        </div>
        <div class="stat-title">Total Earn</div>
        <div class="stat-value text-primary">25.6M</div>
        <div class="stat-desc">15% more than last 6 Month</div>
      </div>

      
    </div>
  );
};

export default Summary;
