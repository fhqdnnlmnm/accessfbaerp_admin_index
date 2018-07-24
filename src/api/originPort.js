import request from '@/libs/request';

export function fetchList (query) {
    return request({
        url: '/port_origins',
        method: 'get',
        params: query
    });
}
