import request from '@/libs/request';

export function fetchList (query) {
    return request({
        url: '/customers',
        method: 'get',
        params: query
    });
}
