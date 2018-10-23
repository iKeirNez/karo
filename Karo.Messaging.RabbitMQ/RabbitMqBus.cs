using System;
using System.Threading.Tasks;
using MassTransit;
using Microsoft.Extensions.Logging;

namespace Karo.Messaging.RabbitMQ
{
    public class RabbitMqBus : IBus, IDisposable
    {
        private ILogger<RabbitMqBus> _logger;
        private IBusFactory _busFactory;

        private IBusControl _busControl;

        public RabbitMqBus(ILogger<RabbitMqBus> logger, IBusFactory busFactory)
        {
            _logger = logger;
            _busFactory = busFactory;
        }
        
        public async Task StartAsync()
        {
            _busControl = _busFactory.Create();
            await _busControl.StartAsync();
        }

        public void Dispose()
        {
            _busControl.Stop();
        }
    }
}