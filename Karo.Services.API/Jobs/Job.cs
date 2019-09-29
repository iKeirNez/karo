using System;

namespace Karo.Services.API.Jobs
{
    public class Job
    {
        public string Company { get; set; }
        
        public string Position { get; set; }
        
        public string Description { get; set; }
        
        public DateTimeOffset Start { get; set; }
        
        public DateTimeOffset? End { get; set; }
    }
}