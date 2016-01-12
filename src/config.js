var config = {
  pubnub_prefix: 'pubnub',
  default_instance_name: 'default',
  methods_to_delegate: ['history', 'replay', 'publish', 'unsubscribe', 'here_now', 'grant', 'revoke',
    'audit', 'time', 'where_now', 'state',
    'channel_group', 'channel_group_list_channels', 'channel_group_list_groups', 'channel_group_list_namespaces',
    'channel_group_remove_channel', 'channel_group_remove_group', 'channel_group_remove_namespace',
    'channel_group_add_channel', 'channel_group_cloak', 'set_uuid', 'get_uuid', 'uuid', 'auth',
    'set_cipher_key', 'get_cipher_key', 'raw_encrypt', 'raw_decrypt',
    'set_heartbeat', 'get_heartbeat', 'set_heartbeat_interval', 'get_heartbeat_interval'],
  common_callbacks_to_wrap: ['callback', 'error'],
  subscribe_callbacks_to_wrap: ['callback', 'connect', 'reconnect', 'disconnect', 'error', 'idle', 'presence'],
};
