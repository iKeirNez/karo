using System;

namespace Karo.Services.API.Jobs
{
    public class Job
    {
        public string Id { get; set; }
        
        public string Company { get; set; }
        
        public string Position { get; set; }
        
        public string Description { get; set; }
        
        public string Url { get; set; }
        
        public DateTimeOffset Start { get; set; }
        
        public DateTimeOffset? End { get; set; }
    }
}