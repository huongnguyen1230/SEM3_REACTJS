﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Practical.Models
{
    public partial class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Qty { get; set; }
        public int Price { get; set; }
    }
}
