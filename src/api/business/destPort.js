import request from '@/libs/request';

export function fetchList (query) {
    return request({
        url: '/dest_ports',
        method: 'get',
        params: query
    });
}
