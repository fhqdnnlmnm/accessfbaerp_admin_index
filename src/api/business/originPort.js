import request from '@/libs/request';

export function fetchList (query) {
    return request({
        url: '/origin_ports',
        method: 'get',
        params: query
    });
}
