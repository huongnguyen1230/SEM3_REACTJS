﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Practical.Models
{
    public partial class User
    {
        public int IdUser { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
