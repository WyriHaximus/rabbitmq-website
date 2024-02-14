/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'doc',
      id: 'documentation',
      label: 'Introduction',
    },
    {
      type: 'link',
      label: 'Release Information',
      href: '/release-information'
    },
    {
      type: 'link',
      label: 'Getting Started',
      href: '/tutorials'
    },
    {
      type: 'doc',
      id: 'download',
      label: 'How Do I Get RabbitMQ',
    },
    {
      type: 'category',
      label: 'Install and Upgrade',
      link: {type: 'doc', id: 'install-and-upgrade'},
      items: [
        {
          type: 'category',
          label: 'Install Requirements',
          link: {type: 'doc', id: 'install-requirements'},
          items: [
            {
              type: 'doc',
              id: 'which-erlang',
              label: 'Erlang Version Requirements',
            },
            {
              type: 'doc',
              id: 'signatures',
              label: 'Release Package Signatures',
            },
          ],
        },
       {
         type: 'category',
         label: 'Supported Operating Systems',
         items: [
         {
          type: 'category',
          label: 'Linux/Unix',
          items: [
                  {
                  type: 'doc',
                  id: 'install-debian',
                  label: 'Debian and Ubuntu',
                  },
                 {
                  type: 'doc',
                  id: 'install-rpm',
                  label: 'RedHat',
                 },
                 {
                  type: 'doc',
                  id: 'install-generic-unix',
                  label: 'Generic Unix: Linux, MacOS, and BSD systems',
                 },
              ],
            },
            {
              type: 'doc',
              id: 'install-windows',
              label: 'Windows',
              }, 
              {
                type: 'category',
                label: 'MacOS',
                items: [
                        {
                        type: 'doc',
                        id: 'install-standalone-mac',
                        label: 'MacOS using Standalone Binary Build',
                        },
                       {
                        type: 'doc',
                        id: 'install-homebrew',
                        label: 'MacOs using Homebrew',
                       },
                    ],
                  },
           ],
         },
         {
          type: 'category',
          label: 'Install Instructions',
          link: {type: 'doc', id: 'build'},
          items: [
            {
              type: 'doc',
              id: 'github',
              label: 'Using Git and Github',
            },
            {
              type: 'doc',
              id: 'build',
              label: 'Building the Server',
            },
          ],
        },
         {
          type: 'category',
          label: 'Upgrade',
          link: {type: 'doc', id: 'upgrade'},
          items: [
            {
              type: 'doc',
              id: 'blue-green-upgrade',
              label: ' Blue-Green Upgrade',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'How to Use RabbitMQ',
      items: [
        {
          type: 'doc',
          id: 'feature-flags',
          label: 'Features Flags',
        },
        {
          type: 'doc',
          id: 'reliability',
          label: 'Reliability and Data Safety',
        },
        {
        type: 'category',
        label: 'Publishing Messages',
        items: [
          {
            type: 'doc',
            id: 'e2e',
            label: 'Exchange to Exchange Bindings',
          },
          {
            type: 'doc',
            id: 'ae',
            label: 'Alternative Exchanges',
          },
          {
            type: 'doc',
            id: 'sender-selected',
            label: 'Sender-selected Distribution',
          },
        ],
      },
      {
        type: 'category',
        label: 'Consuming Messages',
        items: [
          {
            type: 'doc',
            id: 'consumers',
            label: 'Describing Consumers',
          },
          {
            type: 'doc',
            id: 'consumer-cancel',
            label: 'Consumer Cancellation Notifications',
          },
          {
            type: 'doc',
            id: 'consumer-prefetch',
            label: 'Consumer Prefetch',
          },
          {
            type: 'doc',
            id: 'consumer-priority',
            label: 'Consumer Priorites',
          },
        ],
      },
      {
        type: 'doc',
        id: 'confirms',
        label: 'Consumer Acknowledgements and Publisher Confirms',
      },
      {
        type: 'category',
        label: 'Queues and Streams',
        items: [
          {
            type: 'doc',
            id: 'queues',
            label: 'Queues in General',
          },
          {
            type: 'doc',
            id: 'quorum-queues',
            label: 'Quorum Queues',
          },
          {
            type: 'doc',
            id: 'classic-queues',
            label: 'Classic Queues',
          },
          {
            type: 'doc',
            id: 'migrate-mcq-to-qq',
            label: 'Migrate Mirrored Classic Queues to Quorum Queues',
          },
          {
            type: 'doc',
            id: 'ttl',
            label: 'Time-to-Live and Expiration',
          },
          {
            type: 'doc',
            id: 'maxlength',
            label: 'Set the Queue Length',
          },
          {
            type: 'doc',
            id: 'lazy-queues',
            label: 'Set the Queue Modes: Lazy and Default',
          },
          {
            type: 'doc',
            id: 'dlx',
            label: 'Dead Lettering Feature',
          },
          {
            type: 'doc',
            id: 'priority',
            label: 'Turn your Queues into Priority Queues',
          },
          {
            type: 'doc',
            id: 'streams',
            label: 'Streams',
          },
        ],
      },
      {
        type: 'category',
        label: 'Working with Plugins',
        items: [
          {
            type: 'doc',
            id: 'installing-plugins',
            label: 'Installing Plugins',
          },
          {
            type: 'category',
            label: 'Management Plugin',
            link: {type: 'doc', id: 'management'},
            items: [
              {
                type: 'doc',
                id: 'management-cli',
                label: 'Management CLI',
              },
            ],
          },
          {
            type: 'category',
            label: 'Federation Plugin',
            link: {type: 'doc', id: 'federation'},
            items: [
              {
                type: 'doc',
                id: 'federated-exchanges',
                label: 'Federated Exchanges',
              },
              {
                type: 'doc',
                id: 'federated-queues',
                label: 'Federated Queues',
              },
              {
                type: 'doc',
                id: 'federation-reference',
                label: 'Federation Reference',
              },
            ],
          },
          {
            type: 'category',
            label: 'Shovel Plugin',
            link: {type: 'doc', id: 'shovel'},
            items: [
              {
                type: 'doc',
                id: 'shovel-static',
                label: 'Configuring Static Shovels',
              },
              {
                type: 'doc',
                id: 'shovel-dynamic',
                label: 'Configuring Dynamic Shovels',
              },
            ],
          }, 
          {
            type: 'doc',
            id: 'stream',
            label: 'Stream Plugin',
          },
          {
            type: 'doc',
            id: 'stomp',
            label: 'STOMP Plugin',
          },
          {
            type: 'doc',
            id: 'web-stomp',
            label: 'Web STOMP Plugin',
          },
          {
            type: 'doc',
            id: 'mqtt',
            label: 'MQTT Plugin',
          },
          {
            type: 'doc',
            id: 'web-mqtt',
            label: 'Web MQTT Plugin',
          },
          {
            type: 'doc',
            id: 'ldap',
            label: 'LDAP Plugin',
          },    
        ],  
      },
      {
        type: 'doc',
        id: 'distributed',
        label: 'Distributed RabbitMQ Feature',
      },
      {
        type: 'category',
        label: 'Protocols',
        link: {type: 'doc', id: 'protocols'},
        items: [
          {
            type: 'link',
            label: 'AMQP 0-9-1 Protocol',
            href: '/tutorials/amqp-concepts'
          },
          {
            type: 'doc',
            id: 'protocol',
            label: 'AMQP 0-9-1 Specification',
          },
          {
            type: 'doc',
            id: 'specification',
            label: 'Differences between AMQP Protocol Versions',
          },
          {
            type: 'doc',
            id: 'channels',
            label: 'Channels',
          },
          {
            type: 'category',
            label: 'Extensions',
            link: {type: 'doc', id: 'extensions'},
            items: [
              {
                type: 'doc',
                id: 'extensions',
               label: 'Protocol Extensions'
              },
              {
                type: 'doc',
                id: 'direct-reply-to',
                label: 'Direct reply-to',
              },
              {
                type: 'doc',
                id: 'connection-blocked',
                label: 'Blocked Connection Notifications',
              },
              {
                type: 'doc',
                id: 'nack',
                label: 'Negative Acknowledgements',
              },
              {
                type: 'doc',
                id: 'e2e',
                label: 'Exchange to Exchange Bindings',
              },
              {
                type: 'doc',
                id: 'sender-selected',
                label: 'Sender-selected Distribution',
              },
            ],
          }, 
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Configuration and Administration',
    link: {type: 'doc', id: 'configure'},
    items: [
        {
        type: 'doc',
        id: 'relocate',
        label: 'File Directory and Locations',
        }, 
        {
          type: 'doc',
          id: 'logging',
          label: 'Logging',
        },
        {
          type: 'doc',
          id: 'parameters',
          label: 'Policies and Runtime Parameters',
        },
        {
          type: 'doc',
          id: 'definitions',
          label: 'Schema Definitions',
        },
        {
          type: 'doc',
          id: 'vhosts',
          label: 'Per Virtual Host Limits'          
        },
        {
          type: 'doc',
          id: 'user-limits',
          label: 'Per User Resource Limits'          
        },
        {
          type: 'doc',
          id: 'runtime',
          label: 'Runtime Tuning'          
        },

      {
        type: 'category',
        label: ' Authentication and Authorization',        
        link: {type: 'doc', id: 'access-control'},
         items: [
          {
           type: 'doc',
           id: 'authentication',
           label: 'AMQP 0-9-1 Authentication Mechanisms',
           },
          {
           type: 'doc',
           id: 'vhosts',
           label: 'Virtual Hosts',
          },
          {
           type: 'doc',
           id: 'passwords',
           label: 'Credentials and Passwords',
           },
           {
           type: 'doc',
           id: 'oauth2',
           label: 'OAuth 2 Support',
           },
           {
           type: 'doc',
           id: 'oauth2-examples',
           label: 'OAuth 2 Examples',
           },
           {
           type: 'doc',
           id: 'ldap',
           label: 'LDAP',
           },
           {
            type: 'doc',
            id: 'validated-user-id',
            label: 'Validated User ID',
            },
            {
            type: 'doc',
            id: 'auth-notification',
            label: 'Authentication Failure Notifications',
            },
         ],
      },
      {
        type: 'category',
        label: 'Client Connections, Networking, and TLS',
        items: [
          {
            type: 'doc',
            id: 'networking',
            label: 'Networking',
          },
          {
            type: 'doc',
            id: 'troubleshooting-networking',
            label: 'Troubleshooting Network Connectivity',
          },
          {
            type: 'doc',
            id: 'ssl',
            label: 'TLS Support',
          },
          {
            type: 'doc',
            id: 'clustering-ssl',
            label: 'Using TLS for Inter-node Traffic',
          },
          {
            type: 'doc',
            id: 'troubleshooting-ssl',
            label: 'Troubleshooting TLS Support',
          },
        ],
      },
      {
        type: 'category',
        label: 'Monitoring and Auditing',
        link: {type: 'doc', id: 'monitoring'},
         items: [
          {
           type: 'doc',
           id: 'prometheus',
           label: 'Monitoring with Prometheus and Grafana',
           },
          {
           type: 'doc',
           id: 'management',
           label: 'Monitoring with the Management Plugin',
          },
          {
           type: 'doc',
           id: 'event-exchange',
           label: 'Using the Event Exchange Plugin to Monitor Events',
           },
           {
           type: 'doc',
           id: 'firehose',
           label: 'Message Tracing',
           },
           {
           type: 'doc',
           id: 'amqp-wireshark',
           label: 'Inspecting AMQP Traffic with Wireshark',
           },
           {
           type: 'doc',
           id: 'heartbeats',
           label: 'Detecting Dead TCP Connections with Heartbeats and TCP Keepalives',
           },
         ],
      },
      {
        type: 'category',
        label: 'Resource Management',
        items: [
             {
             type: 'doc',
             id: 'memory-use',
             label: 'Analyzing how Memory is Used',
             },
             {
             type: 'doc',
             id: 'alarms',
             label: 'Memory and Disk Alarms',
            },
            {
             type: 'doc',
             id: 'disk-alarms',
             label: 'Free Disk Space Alarms',
            },
            {
             type: 'doc',
             id: 'flow-control',
             label: 'Flow Control',
            },
         ],  
       },
       {
       type: 'doc',
       id: 'backup',
       label: 'Backup and Restore',
       }, 
    ],
    },
    {
      type: 'link',
      label: 'Integrating with Client Libraries',
      href: '/client-libraries'
    },

    {
      type: 'category',
      label: 'Troubleshooting',
      link: {type: 'doc', id: 'troubleshooting'},
      items: [
        {
          type: 'doc',
          id: 'troubleshooting-networking',
          label: 'Troubleshooting Network Connectivity',
        },
        {
          type: 'doc',
          id: 'troubleshooting-ssl',
          label: 'Troubleshooting TLS',
        },
        {
          type: 'doc',
          id: 'windows-quirks',
          label: 'Troubleshooting the Windows Install',
        },
      ],
    },
    {
      type: 'link',
      label: 'Other Information',
      href: '/other-information'
    },   
  ],
};

export default sidebars;
